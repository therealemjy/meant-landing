import Section from '../../components/Section';
import Container from '../../components/Container';
import H from '../../components/H';
import P from '../../components/P';
import Ul from '../../components/Ul';
import Li from '../../components/Li';

import style from './style';

const TermsOfUse = () => (
	<Section>
		<Container className={style.container}>
			<H className={style.title}>Terms of Use</H>

			<P>
				Get-hermes.com may revise these terms of use for its service at any time without notice.
				By using this service you are agreeing to be bound by the then current version of these Terms
				and Conditions of Use.
				Our technical infrastructure is provided by both Amazon Web Services and CloudFlare, relayed all
				over the world.
			</P>

			<H type="h3">1. Use License</H>

			<P>
				Permission is granted to temporarily download one copy of the materials (information or software) on
				Get-hermes.com's service for personal use only (whether it be in the context of an individual or an
				organization). This is the grant of a License, not a transfer of title, and under this License you may not:
			</P>

			<Ul>
				<Li>Modify or copy the materials;</Li>
				<Li>Attempt to decompile or reverse engineer any software contained on Get-hermes.com's service;</Li>
				<Li>Remove any copyright or other proprietary notations from the materials; or</Li>
				<Li>Transfer the materials to another person or “mirror” the materials on any other server.</Li>
			</Ul>

			<P>
				This License shall automatically terminate if you violate any of these restrictions and may be terminated
				by Get-hermes.com at any time.
			</P>

			<H type="h3">2. Disclaimer</H>

			<P>
				The materials on Get-hermes.com's service are provided “as is”. Get-hermes.com makes no warranties, expressed
				or impLied, and hereby disclaims and negates all other warranties, including without Limitation, impLied
				warranties or conditions of merchantabiLity, fitness for a particular purpose, or non-infringement of
				intellectual property or other violation of rights. Further, Get-hermes.com does not warrant or make any
				representations concerning the accuracy, Likely results, or reLiabiLity of the use of the materials on its
				Internet service or otherwise relating to such materials or on any sites Linked to this site.
			</P>

			<H type="h3">3. Limitations</H>

			<P>
				In no event shall Get-hermes.com or its suppLiers be Liable for any damages (including, without Limitation,
				damages for loss of data or profit, or due to business interruption) arising out of the use or inabiLity to
				use the materials on Get-hermes.com's service, even if Get-hermes.com or a Get-hermes.com authorized
				representative has been notified orally or in writing of the possibiLity of such damage. Because some
				jurisdictions do not allow Limitations on impLied warranties, or Limitations of LiabiLity for consequential
				or incidental damages, these Limitations may not apply to you.
			</P>

			<H type="h3">4. Revisions and Errata</H>

			<P>
				The materials appearing on Get-hermes.com's service could include technical or contents errors.
				Get-hermes.com does not warrant that any of the materials on its service are accurate, complete, or current.
				Get-hermes.com may make changes to the materials contained on its service at any time without notice.
				Get-hermes.com does not, however, make any commitment to update the materials.
			</P>

			<H type="h3">5. Cancellation</H>

			<P>
				User can delete their account anytime by contacting our support at hello@get-hermes.com
			</P>

			<H type="h3">6. Service Terms of Use Modifications</H>

			<P>
				Get-hermes.com may revise these terms of use for its service at any time without notice. By using this service
				you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
			</P>

			<P>
				<i>
					By using Get-hermes.com, you commit to use the service in accordance with these principles. On its side,
					Get-hermes.com understakes to provide a reLiable service and comprehensive communication.
				</i>
			</P>
		</Container>
	</Section>
);

export default TermsOfUse;
