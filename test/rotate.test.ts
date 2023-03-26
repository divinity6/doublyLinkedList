import { describe , expect , it , beforeEach } from "@jest/globals";
import Dll from "../src";

describe( "========== Rotate ==========" , () => {
    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
    } );

    it( "length 의 값은 변하지 않는다" , ()=> {
        dll.rotate( 2 );
        expect( dll.length ).toBe( 4 );
    } );

    it( "Head Node 는 rotate index 가 된다" , () => {
        dll.rotate( 2 );
        expect( dll.head.val ).toBe( 15 );
    } );

    it( "Tail Node 는 rotate index - 1 가 된다" , () => {
        dll.rotate( 2 );
        expect( dll.tail.val ).toBe( 10 );
    } );

    it( "음수로 호출하면 Tail Node 부터 앞으로 변경한다" , () => {
        dll.rotate( -100 );
        expect( dll.head.val ).toBe( 5 );
    } );

    it( "-1 로 호출하면 Tail Node 가 된다" , () => {
        dll.rotate( -1 );
        expect( dll.head.val ).toBe( 20 );
    } );

    it ( "head 의 prev 값은 null 이다" , () => {
        dll.rotate( 2 );
        expect( dll.head.prev ).toBeNull();
    } );

    it ( "tail 의 prev 값은 이전 Node 다" , () => {
        dll.rotate( 2 );
        expect( dll.tail.prev.val ).toBe( 5 );
    } );
} )