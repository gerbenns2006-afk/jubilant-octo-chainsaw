import test from 'node:test';
import assert from 'node:assert/strict';
import { interpretFoodText, recommendFoods } from '../app/lib/food-plan.ts';
const base={likes:[],avoids:[],diet:'any',quick:false,budget:false,otherRestriction:false,foodText:''};
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
test('specific foods typed in plain language shape recommendations',()=>{
 const plan=recommendFoods({...base,foodText:'I usually eat salmon with rice and vegetables'});
 assert.ok(plan.length);
 assert.ok(plan.every(food=>food.match.includes('Fish meals') || food.match.includes('Rice or pasta')));
 assert.match(interpretFoodText('salmon with rice').summary,/fish or seafood/);
});
test('broad fried and junk-food descriptions produce nonjudgmental next-step notes',()=>{
 const insight=interpretFoodText('mostly fried foods and junk food');
 assert.ok(insight.notes.some(note=>note.includes('fried foods')));
 assert.ok(insight.notes.some(note=>note.includes('actual item or brand')));
});
test('cultural meals stay visible when the small library does not recognize them',()=>{
 const insight=interpretFoodText('traditional family recipe: griot with pikliz');
 const plan=recommendFoods({...base,foodText:'traditional family recipe: griot with pikliz'});
 assert.match(insight.summary,/griot with pikliz/);
 assert.ok(insight.notes.some(note=>note.includes('Cultural and family foods')));
 assert.ok(insight.notes.some(note=>note.includes('saved your words exactly')));
 assert.equal(plan[0].title,'Map the meal you named');
 assert.match(plan[0].detail,/griot with pikliz/);
});
