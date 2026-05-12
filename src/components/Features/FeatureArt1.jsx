import { useScrollReveal } from '../../hooks/useScrollReveal';
import CodePanel, { C } from '../ui/CodePanel';
import DashboardCard from '../ui/DashboardCard';

const ease = 'cubic-bezier(0.16,1,0.3,1)';

const FeatureArt1 = () => {
  const [ref, visible] = useScrollReveal(0.2);
  return (
    <div ref={ref} style={{ position: 'relative', height: '100%' }}>
      <div style={{
        position: 'absolute', left: 0, top: 20, width: '90%', zIndex: 1,
        transform: visible ? 'translateY(0)' : 'translateY(60px)',
        transition: `transform 0.9s ${ease}`,
      }}>
        <CodePanel title="classify.ts" rotate={-1.5}>
{`import { Sechpoint } from `}<C.s>'@sechpoint/dpi-sdk'</C.s>{`
const probe = `}<C.k>new</C.k>{` `}<C.f>Sechpoint</C.f>{`({ region: `}<C.s>'us-east-1'</C.s>{` })

`}<C.c>{`// classify a subscriber flow`}</C.c>{`
`}<C.k>const</C.k>{` result = `}<C.k>await</C.k>{` probe.`}<C.f>classify</C.f>{`({
  flow:    `}<C.s>'192.168.1.42:52341'</C.s>{`,
  proto:   `}<C.s>'HTTPS'</C.s>{`,
  scope:   [`}<C.s>'l7'</C.s>{`, `}<C.s>'behavioral'</C.s>{`],
  policy:  `}<C.s>'visibility.default'</C.s>{`,
})

`}<C.k>return</C.k>{` { app: result.label }`}
        </CodePanel>
      </div>
      <div style={{
        position: 'absolute', right: -10, bottom: 0, width: '80%', zIndex: 2,
        transform: visible ? 'translateY(0)' : 'translateY(60px)',
        transition: `transform 0.9s ${ease} 0.18s`,
      }}>
        <DashboardCard rotate={2} />
      </div>
    </div>
  );
};

export default FeatureArt1;
