import {Container} from "react-bootstrap";
import a from '../Images/Graphics/1.webp';
import b from '../Images/Graphics/6.webp';
import c from '../Images/Graphics/3.webp';
import d from '../Images/Graphics/4.webp';
import e from '../Images/Graphics/5.webp';
import f from '../Images/Graphics/2.webp';
import g from '../Images/Graphics/7.webp';
import h from '../Images/Graphics/8.webp';
import i from '../Images/Graphics/9.webp';
import j from '../Images/Graphics/10.webp';
import k from '../Images/Graphics/11.webp';
import l from '../Images/Graphics/12.webp';
import m from '../Images/Graphics/13.webp';
import n from '../Images/Graphics/14.webp';
import o from '../Images/Graphics/67.webp';
import p from '../Images/Graphics/68.webp';
import q from '../Images/Graphics/15.webp';
import r from '../Images/Graphics/16.webp';
import s from '../Images/Graphics/17.webp';
import t from '../Images/Graphics/18.webp';
import u from '../Images/Graphics/19.webp';
import v from '../Images/Graphics/20.webp';
import w from '../Images/Graphics/21.webp';
import x from '../Images/Graphics/22.webp';
import y from '../Images/Graphics/23.webp';
import z from '../Images/Graphics/24.webp';
import A from '../Images/Graphics/25.webp';
import B from '../Images/Graphics/26.webp';
import C from '../Images/Graphics/27.webp';
import D from '../Images/Graphics/28.webp';
import E from '../Images/Graphics/29.webp';
import F from '../Images/Graphics/30.webp';
import G from '../Images/Graphics/31.webp';
import H from '../Images/Graphics/32.webp';
import I from '../Images/Graphics/33.webp';
import J from '../Images/Graphics/34.webp';
import K from '../Images/Graphics/35.webp';
import L from '../Images/Graphics/36.webp';
import M from '../Images/Graphics/37.webp';
import N from '../Images/Graphics/38.webp';
import O from '../Images/Graphics/39.webp';
import P from '../Images/Graphics/40.webp';
import Q from '../Images/Graphics/41.webp';
import R from '../Images/Graphics/42.webp';
import S from '../Images/Graphics/43.webp';
import T from '../Images/Graphics/44.webp';
import U from '../Images/Graphics/45.webp';
import V from '../Images/Graphics/46.webp';
import W from '../Images/Graphics/47.webp';
import X from '../Images/Graphics/48.webp';
import Y from '../Images/Graphics/49.webp';
import Z from '../Images/Graphics/50.webp';
import aA from '../Images/Graphics/51.webp';
import bB from '../Images/Graphics/52.webp';
import cC from '../Images/Graphics/53.webp';
import dD from '../Images/Graphics/54.webp';
import eE from '../Images/Graphics/55.webp';
import fF from '../Images/Graphics/56.webp';
import gG from '../Images/Graphics/57.webp';
import hH from '../Images/Graphics/58.webp';
import iI from '../Images/Graphics/59.webp';
import jJ from '../Images/Graphics/60.webp';
import kK from '../Images/Graphics/61.webp';
import lL from '../Images/Graphics/62.webp';
import mM from '../Images/Graphics/63.webp';
import nN from '../Images/Graphics/64.webp';
import oO from '../Images/Graphics/65.webp';
import pP from '../Images/Graphics/66.webp';

const imgArr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,
                A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,
                 aA,bB,cC,dD,eE,fF,gG,hH,iI,jJ,kK,lL,mM,nN,oO,pP];

const imgItems = imgArr.map((imgs) =>
    <img className="image-map" src={imgs} />
);

function Graphics() {
    return (
        <Container >
            <section className="text-center pt-3" id="photos">
                <div>{imgItems}</div>
            </section>
        </Container>
    );
}

export default Graphics;
