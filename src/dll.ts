import { LinkedList , Node }    from '../types';
import DllNode                  from './node';
import LinkedListIterator       from './listIterator';

/** DoublyLinkedList */
export default class Dll<T> implements LinkedList<T> {

    public head : Node<T>;
    public tail : Node<T>;
    private _length : number;

    public get length() : number {
        return this._length;
    }

    public constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    /** 마지막 Node 를 삽입합니다 */
    public push( val : T ) : this {

        const newNode = new DllNode( val );

        if ( 0 === this._length ){
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;

        this._length += 1;

        return this;
    }

    /** 마지막 Node 를 제거합니다 */
    public pop() : Node<T> | void {
        if ( 0 === this._length ){
            return;
        }

        let removeNode = this.tail;

        if ( 1 === this._length ){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = removeNode.prev;
            this.tail.next = null;
            removeNode.prev = null;
        }

        this._length -= 1;

        return removeNode;
    }

    /** 첫번째 Node 를 제거합니다 */
    public shift() : Node<T> | void {
        if ( 0 === this._length ){
            return;
        }

        const shiftNode = this.head;

        if ( 1 === this._length ){
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = shiftNode.next;
            this.head.prev = null;
            shiftNode.next = null;
        }

        this._length -= 1;

        return shiftNode;
    }

    /** 첫번째 Node 를 삽입합니다 */
    public unshift( val : T ) : this {
        const newNode = new DllNode( val );
        if ( 0 === this._length ){
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
        }
        this.head = newNode;

        this._length += 1;

        return this;
    }

    /** index Node 를 반환합니다 */
    public get( index : number ) : Node<T> | null {
        if ( 0 === this._length || 0 > index || index >= this._length ){
            return null;
        }

        let foundNode;
        if ( index <= this._length / 2 ){
            foundNode = this.head;
            for ( let count = 0; count < index; count += 1 ){
                foundNode = foundNode.next;
            }
            return foundNode;
        }

        foundNode = this.tail;
        for ( let count = this._length - 1; count < index; count -= 1 ){
            foundNode = foundNode.prev;
        }
        return foundNode;
    }


    /** index Node 를 설정합니다 */
    public set( index : number , val : T ) : boolean {
        const foundNode = this.get( index );

        if ( foundNode ){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /** index Node 를 삽입합니다 */
    public insert( index : number , val : T ) : boolean {
        if ( 0 > index || index > this._length ){
            return false;
        }
        else if ( 0 === index ){
            this.unshift( val );
            return true;
        }
        else if ( index === this._length ){
            this.push( val );
            return true;
        }

        const newNode = new DllNode( val );
        const prevNode = this.get( index - 1 );
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this._length += 1;

        return true;
    }

    /** index Node 를 제거합니다 */
    public remove( index : number ) : Node<T> | void {
        if ( 0 === this._length || 0 > index || index >= this._length ){
            return;
        }

        if ( 0 === index ){
            return this.shift();
        }
        else if ( this._length - 1 === index ){
            return this.pop();
        }

        const removeNode = this.get( index );
        const prevNode = removeNode.prev;
        const nextNode = removeNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removeNode.prev = null;
        removeNode.next = null;

        this._length -= 1;

        return removeNode;
    }

    /** index 부터 재정렬 후 index Node 를 반환합니다 */
    public rotate( index : number ) : Node<T> | null {
        if ( 0 === this._length ){
            return null;
        }

        const _startIndex = index % this._length;
        let _endIndex;
        let startIndex = ( 0 === _startIndex ) ? index : _startIndex;
        let endIndex = startIndex - 1;

        if ( 0 > index ){
            startIndex = this._length + startIndex;
            _endIndex =  startIndex - 1;
            endIndex = 0 > _endIndex ? ( this._length - 1 ) : _endIndex;
        }

        const beforeHead = this.head;
        let currentNode = this.head;
        let foundNode = null;

        for ( let count = 0; count < this._length; count += 1 ){
            if ( startIndex === count ){
                this.head = currentNode;
                foundNode = currentNode;
            }
            else if ( endIndex === count ){
                this.tail = currentNode;
            }

            if ( 0 === count ){
                currentNode.prev = this.tail;
            }
            else if ( ( this._length - 1 ) === count ){
                currentNode.next = beforeHead;
            }
            currentNode = currentNode.next;
        }

        this.tail.next = null;
        this.head.prev = null;

        return foundNode;
    }

    /** list 를 뒤집습니다 */
    public reverse() : this {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next;

        for ( let count = 0; count < this._length; count += 1 ){
            next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }

        return this;
    }

    public [ Symbol.iterator ]() : IterableIterator<Node<T>> {
        return new LinkedListIterator<T>( this );
    }

}