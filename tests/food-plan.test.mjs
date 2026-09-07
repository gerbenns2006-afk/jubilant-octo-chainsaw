import test from 'node:test';
import assert from 'node:assert/strict';
import { recommendFoods } from '../app/lib/food-plan.ts';
const base={likes:[],avoids:[],diet:'any',quick:false,budget:false,otherRestriction:false};
test('matches preferences and excludes restricted foods',()=>{
 const plan=recommendFoods({...base,likes:['Smoothies'],avoids:['Milk']});
 assert.ok(plan.length); assert.ok(plan.every(f=>f.match.includes('Smoothies') && !f.contains.includes('Milk')));
});
test('vegan filter wins over incompatible preference',()=>{
 assert.deepEqual(recommendFoods({...base,likes:['Fish meals'],diet:'vegan'}),[]);
 assert.ok(recommendFoods({...base,diet:'vegan'}).every(f=>f.diet==='vegan'));
});
test('additional medical restrictions pause food suggestions',()=>assert.deepEqual(recommendFoods({...base,otherRestriction:true}),[]));
test('skipped answers produce bounded choices; conflicting filters stay empty',()=>{
 assert.equal(recommendFoods(base).length,3);
 assert.deepEqual(recommendFoods({...base,diet:'vegan',quick:true,avoids:['Wheat']}),[]);
});
