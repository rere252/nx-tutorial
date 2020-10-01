import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '@rjd/data';

@Component({
  selector: 'rjd-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  @Input() todos: Todo[];
}
