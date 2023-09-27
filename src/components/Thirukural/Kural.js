import KuralAccordian from './KuralAccordian';
import kurals from '../../json/kural.json'
import { BreadcrumbsItem } from '../template/breadcrumb/BreadcrumbDetails';

function Kural(props) {
    return (
        <div className="row justify-content-center">
                  <BreadcrumbsItem glyph='home' to='/thirukkural/chaptergroup/chapter/kural'>
        Kurals
      </BreadcrumbsItem>

            {
                kurals.map((kural)=>{
                    return props.kuralList.start <= kural.Number && props.kuralList.end >= kural.Number && <KuralAccordian kural={kural} />
                })
            }
        </div>
    )
}

export default Kural;