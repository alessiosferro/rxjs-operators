import { of } from "rxjs";
import { take } from "rxjs/operators";

export default () => {
  const subscription = of(1, 2, 3)
    .pipe(take(1))
    .subscribe({
      next: (val: number) => console.log(val)
    });

  subscription.unsubscribe();
};
