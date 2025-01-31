import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tarefa } from '../interface/tarefa';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  // private readonly API = environment.apiUrl;
  // private readonly API = 'http://localhost:3000/tarefas';
  private readonly API = 'https://json-tarefas-memorando.vercel.app/tarefas'; //testar
  private tarefaSubject = new BehaviorSubject<Tarefa[]>([]);
  constructor(private http: HttpClient) {}
  tarefas$ = this.tarefaSubject.asObservable(); //o asObservable() é para não permitir que o valor seja alterado fora do serviço

  listar(): void {
    let params = new HttpParams().appendAll({
      _sort: 'id',
      _order: 'desc',
    });
    this.http.get<Tarefa[]>(this.API, { params }).subscribe((tarefas) => {
      let tarefasTemporarias = this.tarefaSubject.getValue(); // pega o valor atual do array
      tarefasTemporarias = tarefasTemporarias.concat(tarefas);
      this.tarefaSubject.next(tarefasTemporarias);
    });
  }

  criar(tarefa: Tarefa): void {
    this.http.post<Tarefa>(this.API, tarefa).subscribe((novaTarefa) => {
      const tarefas = this.tarefaSubject.getValue(); //pega o valor atual do array
      tarefas.unshift(novaTarefa); //"unshift"adiciona no início do array, já o push adiciona no final.
      this.tarefaSubject.next(tarefas);
    });
  }

  editar(tarefa: Tarefa, atualizarSubject: boolean): void {
    const url = `${this.API}/${tarefa.id}`;
    this.http.put<Tarefa>(url, tarefa).subscribe(tarefaEditada => {
      if (atualizarSubject) {
        const tarefas = this.tarefaSubject.getValue();
        const index = tarefas.findIndex(tarefa => tarefa.id === tarefaEditada.id);
        if (index !== -1) {
          tarefas[index] = tarefaEditada;
          this.tarefaSubject.next(tarefas);
        }
      }

    });
  }

  excluir(id: number): void {
    const url = `${this.API}/${id}`;
    this.http.delete<Tarefa>(url).subscribe(() => {
      const tarefas = this.tarefaSubject.getValue();
      const index = tarefas.findIndex(tarefa => tarefa.id === id);
      if (index !== -1) {
        tarefas.splice(index, 1);
        this.tarefaSubject.next(tarefas);
      }
    });

  }

  buscarPorId(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  atualizarStatusTarefa(tarefa: Tarefa): void {
    tarefa.statusFinalizado = !tarefa.statusFinalizado;
    this.editar(tarefa, false);
  }
}
