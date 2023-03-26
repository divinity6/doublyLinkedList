import {beforeEach, describe, expect, it} from "@jest/globals";
import Dll from "../src";

describe( "========== Insert ==========" , () => {
    let isInsert;
    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
        isInsert = dll.insert( 1 , 30 );
    } );

    it( "length 의 값은 set 메서드를 호출한 만큼 증가한다" , ()=> {

        expect( dll.length ).toBe( 5 );
    } );

    it( "반환 값은 성공 여부를 반환한다" , () => {
        expect( isInsert ).toBe( true );
    } );

    it( "기존 위치의 index 번째 값은 뒤로 밀려난다" , () => {
        expect( dll.get( 2 ).val ).toBe( 10 );
    } );

    it( "Tail Node 의 값은 변하지 않는다" , () => {
        expect( dll.tail.val ).toBe( 20 );
    } );

    it( "음수 값으로 호출하면 false 를 반환한다" , () => {
        expect( dll.insert( -1 ) ).toBe( false );
    } );

    it( "index 를 벗어난 값으로 호출하면 false 을 반환한다" , () => {
        expect( dll.insert( 100 ) ).toBe( false );
    } );

    it( "삽입한 값의 prev 는 기존 prev 가 된다" , () => {
        expect( dll.get( 1 ).prev.val ).toBe( 5 );
    } );
    it( "삽입한 값의 next 는 기존 next 가 된다" , () => {
        expect( dll.get( 1 ).next.val ).toBe( 10 );

    } );
} );