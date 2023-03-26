import { Node } from './node';

/**
 * - linked List 타입
 */
export interface LinkedList<T> {

  head : Node<T>;                                // 첫 번째 Node 입니다
  tail : Node<T>;                                // 마지막 Node 입니다
  get length(): number;                          // linkedList 의 길이입니다

  push( val : T ) : this;                         // 마지막 Node 를 삽입합니다
  pop() : Node<T> | void;                        // 마지막 Node 를 제거합니다
  shift() :  Node<T> | void;                     // 첫번째 Node 를 제거합니다
  unshift( val : T ) : this;                      // 첫번째 Node 를 삽입합니다
  get( index : number ) : Node<T> | null;        // index Node 를 반환합니다

  set( index : number , val : T ) : boolean;      // index Node 를 설정합니다
  insert( index : number , val : T ) : boolean;   // index Node 를 삽입합니다
  remove( index : number ) : Node<T> | void      // index Node 를 제거합니다
  rotate( index : number ) : Node<T> | null      // index 부터 재정렬 후 index Node 를 반환합니다
  reverse() : this;                               // list 를 뒤집습니다

  [ Symbol.iterator ]() : IterableIterator<Node<T>> // 이터레이터를 반환합니다
}