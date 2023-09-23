import KuralAccordian from './KuralAccordian';
import kurals from '../../json/kural.json'

function KuralList(props) {
    return (
        <div className="row justify-content-center">
            {
                kurals.map((kural)=>{
                    return props.kuralList.start <= kural.Number && props.kuralList.end >= kural.Number && <KuralAccordian kural={kural} />
                })
            }
        </div>
    )
}

export default KuralList;