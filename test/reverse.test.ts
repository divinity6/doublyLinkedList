import {beforeEach, describe, expect, it} from "@jest/globals";
import Dll from "../src";

describe( "========== Reverse ==========" , () => {

    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
        dll.reverse();
    } );

    it( "length 의 값은 변하지 않는다" , ()=> {
        expect( dll.length ).toBe( 4 );
    } );

    it( "Head Node 의 값은 Tail Node 의 값이된다" , () => {
        expect( dll.head.val ).toBe( 20 );
    } );

    it( "Tail Node 의 값은 Head Node 가 된다" , () => {
        expect( dll.tail.val ).toBe( 5 );
    } );

    it( "dll 의 값을 역순으로 정렬한다" , () => {
        expect( dll.get( 2 ).val ).toBe( 10 );
    } );

    it( "Head Node 의 이전 값은 null 이다" , () => {
        expect( dll.head.prev ).toBeNull();
    } );

    it( "Tail Node 의 prev 값은 이전 값이다" , () => {
        expect( dll.tail.prev.val ).toBe( 10 );
    } )
} );