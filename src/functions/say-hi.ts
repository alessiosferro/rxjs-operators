import {
  Observable,
  Subscriber,
  Unsubscribable,
  Subscription,
  SubscriptionLike
} from "rxjs";

/**
 * Prints 'Hi' 5 times, then unsubscribe from the observable.
 */
export default () => {
  const observable = new Observable<string>(subscribe);

  function subscribe(subscriber: Subscriber<string>): Subscription {
    let i = 1;

    // every second, calls the subscriber's next callback, passing
    // a 'string' argument
    const id = setInterval(() => {
      subscriber.next(`${i} -> Hi`);
      i = i + 1;
    }, 1000);

    // returns a subscription with a custom unsubscribe method that clears
    // the interval created previously.
    return new Subscription(() => {
      clearInterval(id);
    });
  }

  const subscription = observable.subscribe({
    // specify the next callback
    next: (val: string) => console.log(val)
  });

  // after 5 seconds, unsubscribe.
  setTimeout(() => subscription.unsubscribe(), 5000);
};
