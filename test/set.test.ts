import {beforeEach, describe, expect, it} from "@jest/globals";
import Dll from "../src";


describe( "========== Set ==========" , () => {
    let isSet;
    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );

        isSet = dll.set( 1 , 30 )
    } );

    it( "length 의 값은 변하지 않는다" , ()=> {

        expect( dll.length ).toBe( 4 );
    } );

    it( "반환 값은 성공 여부를 반환한다" , () => {
        expect( isSet ).toBe( true );
    } );

    it( "기존 위치의 index 번째 값을 업데이트 한다" , () => {
        expect( dll.get( 1 ).val ).toBe( 30 );
    } );

    it( "변경한 값의 prev 값은 변하지 않는다" , () => {
        expect( dll.get( 1 ).prev.val ).toBe( 5 );
    } );

    it( "변경한 값의 next 값은 변하지 않는다" , () => {
        expect( dll.get( 1 ).next.val ).toBe( 15 );
    } );

    it( "Tail Node 의 값은 변하지 않는다" , () => {
        expect( dll.tail.val ).toBe( 20 );
    } );

    it( "음수 값으로 호출하면 false 를 반환한다" , () => {
        expect( dll.set( -1 ) ).toBe( false );
    } );

    it( "index 를 벗어난 값으로 호출하면 false 을 반환한다" , () => {
        expect( dll.set( 100 ) ).toBe( false );
    } );

} );