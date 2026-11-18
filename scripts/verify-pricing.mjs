import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../app/data/digitalPricing.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } });
const pricing = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

// Acceptance baseline transcribed from the supplied V2 ZIP, before the reduction.
const originalServices = { 'DIG-01':300, 'WEB-01':400, 'DIG-02':1500, 'DAT-01':600, 'GIS-01':800, 'AUT-01':750, 'AI-01':750, 'ERP-01':1500 };
const originalPlans = { essential:[49,490], growth:[129,1290], professional:[249,2490], premium:[499,4990] };
let assertions=0;
for (const [code, amount] of Object.entries(originalServices)) {
  assert.equal(pricing.digitalPricing[code], amount/2); assertions++;
  for (const [scope,factor] of [['starter',1],['standard',1.5],['advanced',2.2]]) {
    const originalEstimate = Math.round(amount*factor/10)*10;
    assert.equal(pricing.estimateProject(code,scope),originalEstimate/2); assertions++;
  }
}
for (const [id,[monthly,annual]] of Object.entries(originalPlans)) {
  assert.equal(pricing.supportPricing[id].monthly,monthly/2); assertions++;
  assert.equal(pricing.supportPricing[id].annual,annual/2); assertions++;
  const estimator = pricing.estimatorPlans.find(plan=>plan.id===id);
  assert.equal(estimator.monthly,monthly/2); assertions++;
  assert.equal(estimator.annual,annual/2); assertions++;
}
assert.equal(pricing.formatUSD(24.5),'$24.50'); assertions++;
assert.equal(pricing.formatUSD(1245),'$1,245'); assertions++;
assert.equal(pricing.estimatorServices.length,8); assertions++;
console.log(`PASS: ${assertions} pricing acceptance checks; all 8 services, 4 support plans and 24 estimates are exactly 50% of V2.`);
