import {beforeEach, describe, expect, it} from "@jest/globals";
import Dll from "../src";

describe( "========== Unshift ==========" , () => {

    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
        dll.unshift( 30 );
    } );

    it( "length 의 값은 unshift 메서드를 호출한 만큼이 된다" , ()=> {
        expect( dll.length ).toBe( 5 );
    } );


    it( "2 index Node 의 값은 이전 Node 가 된다" , () => {
        expect( dll.head.next.next.val ).toBe( 10 );
    } );

    it( "Head Node 의 값은 unshift 한 값이 된다" , () => {
        expect( dll.head.val ).toBe( 30 );
    } );

    it( "Head Node 의 prev 값은 null 이다" , () => {
        expect( dll.head.prev ).toBeNull();
    } );

    it( "이전 Head 의 prev 값은 새로 넣은 값이다" , () => {
        expect( dll.head.next.prev.val ).toBe( 30 );
    } );

    it( "Tail Node 의 값은 변하지 않는다" , () => {
        expect( dll.tail.val ).toBe( 20 );
    } );
} );