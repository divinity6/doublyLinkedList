import { describe , expect , it , beforeEach } from "@jest/globals";
import Dll from "../src";

describe( '========== Iterator ==========' , ()=> {

  let dll;

  beforeEach( () => {
    dll = new Dll<number>();
    dll.push( 5 );
    dll.push( 10 );
    dll.push( 15 );
    dll.push( 20 );
  } );

  it( "iteration 프로토콜을 준수합니다" , ()=>{
    expect( dll[Symbol.iterator]().next().value.val ).toBe( 5 );
  } );

  it( "첫번째 반환값의 prev 는 null 이다" , ()=>{
    expect( dll[Symbol.iterator]().next().value.prev ).toBeNull();
  } );

  it( "iterator 로 반복할 수 있습니다", () => {
    const result = [];
    for ( const node of dll ){
      result.push( node.val );
    }
    expect( result ).toStrictEqual( [ 5 , 10 , 15 , 20 ] )
  } );

} );