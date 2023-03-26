import { describe , expect , it , beforeEach } from "@jest/globals";
import Dll from "../src";

describe( "========== Shift ==========" , () => {

    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );
        dll.shift();
    } );

    it( "length 의 값은 shift 메서드를 호출한 만큼 줄어든다" , ()=> {
        expect( dll.length ).toBe( 3 );
    } );

    it( "2 index Node 의 값은 그 다음 Node 가 된다" , () => {
        expect( dll.head.next.next.val ).toBe( 20 );
    } );

    it( "Head Node 의 값은 다음 Node 가 된다" , ()=> {
        expect( dll.head.val ).toBe( 10 );
    } );

    it( "Tail Node 의 값은 마지막 값은 변하지 않는다" , () => {
        expect(dll.tail.val).toBe(20);
    } );

    it( "Head Node 의 이전 값은 null 이다" , ()=> {
        expect( dll.head.prev ).toBeNull();
    } )

    describe( "가진 Node 의 갯수 보다 많이 shift 를 호출했을 경우" , ()=> {

        beforeEach( ()=> {
            dll.shift();
            dll.shift();
            dll.shift();
            dll.shift();
        } );

        it( "length 최대 값 이후를 삭제해도 0 이된다" , () => {
            expect( dll.length ).toBe( 0 );
        } );

        it( "Head Node 의 값은 null 이 된다" , () => {
            expect( dll.head ).toBe( null );
        } );

        it( "Tail Node 의 값은 null 이 된다" , () => {
            expect( dll.tail ).toBe( null );
        } );
    } )
} );
