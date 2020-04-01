import { Observable } from "rxjs";

export default () => {
  const observable = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  const observer = {
    next: (x: number) => console.log(`Got value ${x}`),
    error: (err: Error) => console.log(`Something wrong occurred: ${err}`),
    complete: () => console.log("Done!")
  };

  console.log("before subscribing");
  observable.subscribe(observer);
  console.log("after subscribing");
};
