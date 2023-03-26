/**
 * - 공통적인 Node 인터페이스입니다
 */
export interface Node<T> {

  val   : T;          // 해당 Node 의 값입니다
  next?  : Node<T>;    // Node 의 다음 값입니다
  prev? : Node<T>;    // Node 의 이전 값입니다
}