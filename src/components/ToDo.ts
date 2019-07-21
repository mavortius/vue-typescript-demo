import { Component, Vue } from 'vue-property-decorator';
import WithRender from './to-do.html';
import ToDoForm from './ToDoForm';
import Task from '@/model/Task';

@WithRender
@Component({
  components: {
    'to-do-form': ToDoForm,
  },
})
export default class ToDo extends Vue {

  public tasks: Task[] = [
    { description: 'Make coffee', completed: false },
    { description: 'Feed dragons', completed: false },
  ];

  public addTask(description: string): void {
    this.tasks.push({ description, completed: false });
  }
}
