import { describe , expect , it , beforeEach } from "@jest/globals";
import Dll from "../src";


describe( "========== Pop ==========" , ()=> {

    let dll;

    beforeEach( () => {
        dll = new Dll<number>();
        dll.push( 5 );
        dll.push( 10 );
        dll.push( 15 );
        dll.push( 20 );

        dll.pop();
    } );

    it( "length 의 값은 pop 메서드를 호출한 만큼 줄어든다" , ()=> {
        expect( dll.length ).toBe( 3 );
    } );

    it( "Tail Node 의 다음 값은 null 이 된다" , () => {
        expect( dll.tail.next ).toBeNull();
    } );

    it( "Head Node 의 값은 변하지 않는다" , ()=> {
        expect( dll.head.val ).toBe( 5 );
    } );

    it( "Tail Node 의 값은 마지막 push 이전 값이 된다" , () => {
        expect( dll.tail.val ).toBe( 15 );
    } );

    it( "Tail Node 의 prev 값은 이전 값이 된다" , () => {
        expect( dll.tail.prev.val ).toBe( 10 );
    } );

    it( "Head Node 의 prev 값은 null 이다" , () => {
        expect( dll.head.prev ).toBeNull();
    } );

    describe( "가진 Node 의 갯수 보다 많이 pop 을 호출했을 경우" , ()=> {

        beforeEach( ()=> {
            dll.pop();
            dll.pop();
            dll.pop();
            dll.pop();
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