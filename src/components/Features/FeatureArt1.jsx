import CodePanel, { C } from '../ui/CodePanel';
import DashboardCard from '../ui/DashboardCard';

const FeatureArt1 = () => (
  <div style={{ position: 'relative', height: '100%' }}>
    <div style={{ position: 'absolute', left: 0, top: 20, width: '90%', zIndex: 1 }}>
      <CodePanel title="ingest.ts" rotate={-1.5}>
{`import { Sechpoint } from `}<C.s>'@sechpoint/sdk'</C.s>{`
const vault = `}<C.k>new</C.k>{` `}<C.f>Sechpoint</C.f>{`({ region: `}<C.s>'us-east-1'</C.s>{` })

`}<C.c>{`// tokenize a customer record`}</C.c>{`
`}<C.k>const</C.k>{` token = `}<C.k>await</C.k>{` vault.`}<C.f>tokenize</C.f>{`({
  ssn:    `}<C.s>'401-22-9087'</C.s>{`,
  email:  `}<C.s>'avery@northwind.io'</C.s>{`,
  scope:  [`}<C.s>'pii'</C.s>{`, `}<C.s>'us'</C.s>{`],
  policy: `}<C.s>'kyc.read.only'</C.s>{`,
})

`}<C.k>return</C.k>{` { id: token.alias }`}
      </CodePanel>
    </div>
    <div style={{ position: 'absolute', right: -10, bottom: 0, width: '80%', zIndex: 2 }}>
      <DashboardCard rotate={2}/>
    </div>
  </div>
);

export default FeatureArt1;
