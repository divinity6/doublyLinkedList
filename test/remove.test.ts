import {beforeEach, describe, expect, it} from "@jest/globals";
import Dll from "../src";

describe( "========== Remove ==========" , () => {
    let node;
    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
        node = dll.remove( 1 );
    } );

    it( "length 의 값은 remove 메서드를 호출한 만큼 감소한다" , ()=> {
        expect( dll.length ).toBe( 3 );
    } );

    it( "제거한 Node 를 반환한다" , () => {
        expect( node.val ).toBe( 10 );
    } );

    it( "제거한 Node 의 prev 값은 null 이다" , () => {
        expect( node.prev ).toBeNull();
    } );

    it( "제거한 Node 의 next 값은 null 이다" , () => {
        expect( node.next ).toBeNull();
    } );

    it( "제거한 다음 Node 의 prev 값은 이전 Node 다" , () => {
        expect( dll.get( 1 ).prev.val ).toBe( 5 );
    } );

    it( "기존 위치의 index 번째 값을 제거한다" , () => {
        expect( dll.get( 1 ).val ).toBe( 15 );
    } );

    it( "이전 위치의 Node 는 다음 Node 를 바라본다" , () => {
        expect( dll.get( 0 ).next.val ).toBe( 15 );
    } );

    it( "음수 값으로 호출하면 undefined 를 반환한다" , () => {
        expect( dll.remove( -1 ) ).toBe( undefined );
    } );

    it( "index 를 벗어난 값으로 호출하면 undefined 을 반환한다" , () => {
        expect( dll.remove( 100 ) ).toBe( undefined );
    } );
} );