import CodePanel, { C } from '../ui/CodePanel';
import DashboardCard from '../ui/DashboardCard';

const FeatureArt3 = () => (
  <div style={{ position: 'relative', height: '100%' }}>
    <div style={{ position: 'absolute', left: 0, top: 20, width: '90%', zIndex: 1 }}>
      <CodePanel title="threats.log" lang="log" rotate={-2}>
{`[`}<C.c>{`02:14:08`}</C.c>{`] `}<C.f>detect</C.f>{`  anomaly 3.2σ — svc.exports
[`}<C.c>{`02:14:08`}</C.c>{`] `}<C.f>scope </C.f>{` 18,402 rows, fingerprint=pii
[`}<C.c>{`02:14:09`}</C.c>{`] `}<C.k>action</C.k>{` quarantine + alert oncall
[`}<C.c>{`02:14:09`}</C.c>{`] `}<C.k>action</C.k>{` rotate(api_key `}<C.s>'svc.exports'</C.s>{`)
[`}<C.c>{`02:14:11`}</C.c>{`] `}<C.f>verify</C.f>{` block confirmed · `}<C.n>0 leaks</C.n>{`
[`}<C.c>{`02:14:12`}</C.c>{`] `}<C.f>page  </C.f>{` security@sechpoint.io ✓`}
      </CodePanel>
    </div>
    <div style={{ position: 'absolute', right: -10, bottom: 0, width: '78%', zIndex: 2 }}>
      <DashboardCard rotate={2.5}/>
    </div>
  </div>
);

export default FeatureArt3;
