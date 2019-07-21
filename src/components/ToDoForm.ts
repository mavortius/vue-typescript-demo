import WithRender from './to-do-form.html';
import { Component, Prop, Vue } from 'vue-property-decorator';

@WithRender
@Component
export default class ToDoForm extends Vue {

  @Prop({ type: String, default: 'Add Task' })
  public readonly buttonText!: string;

  public task: string = '';

  public emitTask() {
    this.$emit('added', this.task);
    this.task = '';
  }
}
