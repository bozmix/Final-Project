import "./CreateReport.css";
import { SelectCandidate } from "./SelectCandidate/SelectCandidate";
import { SelectCompany } from "./SelectCompany/SelectCompany";
import { FillReportDetails } from "./FillReportDetails/FillReportDetails";
import { Success } from "./Success/Success";
import { useHistory } from "react-router";





export const CreateReport = (props) => {

    const step = +props.match.params.step;      //+ converts any string to number if possible

    const history = useHistory();



    const renderSwitch = () => {
        switch (step) {
            case 1: return <SelectCandidate nextStep={nextStep} />;
            case 2: return <SelectCompany nextStep={nextStep} stepBack={stepBack} />;
            case 3: return <FillReportDetails nextStep={nextStep} stepBack={stepBack} />;
            case 4: return <Success stepBack={stepBack} />;
            default: <SelectCandidate />;
        }
    }



    const nextStep = () => {
        history.push(`/create/${step + 1}`)
    }


    const stepBack = () => {
        history.push(`/create/${step - 1}`)
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-start">
                    <div className="col-10 h1">Reports Administration </div>
                    <div className="buttonsDiv col-2">
                        <button className="btn btn-secondary text-white btn-outline-success me-2" type="button">Create New Report</button>
                    </div>
                </form>
            </nav>

            {renderSwitch()}

            {/* <Switch>
                <Route path='/create/1' component={SelectCandidate} />
                <Route path='/create/2' component={SelectCompany} />
                <Route path='/create/3' component={FillReportDetails} />
                <Route path='/create/success' component={Success} />
            </Switch> */}
        </>
    )
}