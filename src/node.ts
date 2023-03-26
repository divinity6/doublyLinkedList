import { Node } from "../types";

export default class DllNode<T> implements Node<T> {

    public val : T;
    public prev : Node<T>;
    public next : Node<T>;

    public constructor( val : T ) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
