import { Node , LinkedList } from "../types";
/**
 * - Iterator 프로토콜을 만족하는 iterable 객체 입니다
 */
export default class LinkedListIterator<T> implements IterableIterator<Node<T>> {

    private list : LinkedList<T>;

    private currentNode : Node<T>;

    public constructor( list ) {
        this.list = list;
        this.currentNode = list.head;
    }

    public next = () : IteratorResult<Node<T>,Node<T>> => {
        const currentNode = this.currentNode;
        if ( currentNode ){
            this.currentNode = currentNode.next;
            return { value : currentNode , done : false };
        }
        return { value : currentNode , done : true };
    }

    [Symbol.iterator](): IterableIterator<Node<T>> {
        return;
    }
}