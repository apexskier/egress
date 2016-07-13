import { Observable } from "rx";

export const randomIntervalSource = Observable
  .interval(3000)
  .timeInterval()
  .takeWhile(() => true)
  .publish();
