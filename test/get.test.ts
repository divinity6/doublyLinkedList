import {beforeEach, describe, expect, it} from "@jest/globals";
import Dll from "../src";

describe( "========== Get ==========" , () => {

    let node;
    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
        node = dll.get( 1 );
    } );

    it( "length 의 값은 변하지 않는다" , ()=> {

        expect( dll.length ).toBe( 4 );
    } );

    it( "반환한 Node 는 index 번째 값이다" , () => {
        expect( node.val ).toBe( 10 );
    } );

    it( "Head Node 의 값은 변하지 않는다" , () => {
        expect( dll.head.val ).toBe( 5 );
    } );

    it( "Tail Node 의 값은 변하지 않는다" , () => {
        expect( dll.tail.val ).toBe( 20 );
    } );

    it( "음수 값으로 호출하면 null 을 반환한다" , () => {
        expect( dll.get( -1 ) ).toBe( null );
    } );

    it( "index 를 벗어난 값으로 호출하면 null 을 반환한다" , () => {
        expect( dll.get( 100 ) ).toBe( null );
    } );
} );