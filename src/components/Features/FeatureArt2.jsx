import { useScrollReveal } from '../../hooks/useScrollReveal';
import CodePanel, { C } from '../ui/CodePanel';
import DashboardCard from '../ui/DashboardCard';

const ease = 'cubic-bezier(0.16,1,0.3,1)';

const FeatureArt2 = () => {
  const [ref, visible] = useScrollReveal(0.2);
  return (
    <div ref={ref} style={{ position: 'relative', height: '100%' }}>
      <div style={{
        position: 'absolute', right: 0, top: 0, width: '88%', zIndex: 1,
        transform: visible ? 'translateY(0)' : 'translateY(60px)',
        transition: `transform 0.9s ${ease}`,
      }}>
        <DashboardCard rotate={-1.5} />
      </div>
      <div style={{
        position: 'absolute', left: -10, bottom: 0, width: '78%', zIndex: 2,
        transform: visible ? 'translateY(0)' : 'translateY(60px)',
        transition: `transform 0.9s ${ease} 0.18s`,
      }}>
        <CodePanel title="policy.cipher" rotate={1.8} lang="cipher">
{`policy `}<C.f>kyc.read.only</C.f>{` {
  `}<C.k>match</C.k>{` token.scope == [`}<C.s>'pii'</C.s>{`]
  `}<C.k>allow</C.k>{` reveal `}<C.c>{`// just-in-time`}</C.c>{`
    `}<C.k>when</C.k>{` actor in `}<C.f>group</C.f>{`(`}<C.s>'svc.kyc'</C.s>{`)
    `}<C.k>and</C.k>{` request.mfa == `}<C.n>true</C.n>{`
  `}<C.k>deny</C.k>{` export, copy, log_plaintext
  `}<C.k>emit</C.k>{` audit.`}<C.f>signed</C.f>{`(`}<C.s>'siem'</C.s>{`)
}`}
        </CodePanel>
      </div>
    </div>
  );
};

export default FeatureArt2;
