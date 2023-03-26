import { describe , expect , it , beforeEach } from "@jest/globals";
import Dll from "../src";

describe( "========== Push ==========" , ()=> {

    let dll;
    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
    } );

    it( "length 의 값은 push 메서드를 호출한 만큼이 된다" , ()=> {
        expect( dll.length ).toBe( 4 );
    } );

    it( "Tail Node 의 next 값은 null 이 된다" , () => {
        expect( dll.tail.next ).toBe( null );
    } );

    it( "Head Node 의 값은 첫 번째로 push 한 값이 된다" , () => {
        expect( dll.head.val ).toBe( 5 );
    } );

    it( "Tail Node 의 값은 마지막으로 push 한 값이 된다" , () => {
        expect( dll.tail.val ).toBe( 20 );
    } );

    it( "Head Node 의 prev 값은 null 이 된다" , () => {
        expect( dll.head.prev ).toBeNull();
    } );

    it( "Tail Node 의 prev 값은 이전 값이 된다" , () => {
        expect( dll.tail.prev.val ).toBe( 15 );
    } );

} );
