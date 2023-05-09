import React from 'react';
import PrintButton from '../ui/PrintButton';
import ScrollToTop from "react-scroll-to-top";
import Info from '../Home/info';
import Hr from '../Hr/Hr';
import Jntuh from '../Home/jnuth';

const SemResult = ({ query }) => {
    const exam_co = Object.keys(query[0]['Results'])[0]
    const grades = ['O', 'A+', 'A', 'B+', 'B', 'C'];
    return (
        <div key="Results" className="m-2 text-[45%] sm:text-[60%] md:text-[80%] lg:text-[100%]">

            {query.map((Result) => {
                if (!Result || !Result['DETAILS']) return null;
                return (

                    <div key={Result['DETAILS']['NAME']}>
                        <br />
                        <Jntuh />
                        <table className="my-1" key="Details">
                            <tbody>
                                <tr class="bg-gray-200">
                                    <th>NAME</th>
                                    <th>ROLL NO</th>
                                    <th>COLLEGE CODE</th>
                                    <th>FATHER NAME</th>
                                    <th>SEMESTER</th>
                                </tr>
                                <tr>
                                    {
                                        Object.keys(Result['DETAILS']).map((value, index) => { return <><th>{Result['DETAILS'][value]}</th></> })
                                    }
                                    <th>{Object.keys(Result['Results'])[0]}</th>
                                </tr>
                            </tbody>
                        </table>
                        <table key="Result">
                            <tbody key="Result_tbody">
                                <tr class="mx-auto w-max bg-gray-200">
                                    <th>SUBJECT CODE</th>
                                    <th>SUBJECT NAME</th>
                                    <th>INTERNAL</th>
                                    <th>EXTERNAL</th>
                                    <th>TOTAL</th>
                                    <th>GRADE</th>
                                    <th>CREDITS</th>
                                </tr>
                                {
                                    Object.keys(Result['Results']).map(function (exam_code) {
                                        return (
                                            Object.keys(Result['Results'][exam_code]).map(function (subject_code) {
                                                if (subject_code !== 'SGPA' && subject_code !== 'total' && subject_code !== 'credits' && subject_code !== 'status') {
                                                    return <><tr>
                                                        <th>{Result['Results'][exam_code][subject_code]['subject_code']}</th>
                                                        <th>{Result['Results'][exam_code][subject_code]['subject_name']}</th>
                                                        <th>{Result['Results'][exam_code][subject_code]['subject_internal'] === "" ? "-" : Result['Results'][exam_code][subject_code]['subject_internal']}</th>
                                                        <th>{Result['Results'][exam_code][subject_code]['subject_external'] === "" ? "-" : Result['Results'][exam_code][subject_code]['subject_external']}</th>
                                                        <th>{Result['Results'][exam_code][subject_code]['subject_total'] === "" ? "-" : Result['Results'][exam_code][subject_code]['subject_total']}</th>
                                                        <th className={` ${// item.grade_earned === 'F' || item.grade_earned === 'Ab'
                                                            !grades.includes(Result['Results'][exam_code][subject_code]['subject_grade'])
                                                                ? 'text-red-600' : 'text-green-600'}`}
                                                        >{Result['Results'][exam_code][subject_code]['subject_grade'] === "-" ? "MALPRACTICE" : Result['Results'][exam_code][subject_code]['subject_grade']}</th>
                                                        <th>{Result['Results'][exam_code][subject_code]['subject_credits']}</th>
                                                    </tr>
                                                    </>
                                                }
                                            })
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <table key="CGPA">
                            <tbody key="CGPA_tbody">
                                <tr>
                                    <th style={{ width: '75%' }}>SGPA</th>
                                    <th>{Result['Results'][exam_co]['SGPA']}</th>
                                </tr>
                                <tr>
                                    <th style={{ width: '75%' }}>Result</th>
                                    <th className={Result['Results'][exam_co]['status'] === 'FAILED' ? 'text-red-600' : 'text-green-600'}>{Result['Results'][exam_co]['status']}</th>
                                </tr>

                            </tbody>
                        </table>
                        <br />
                    </div>
                );
            })}
            <Info />
            <Hr />
            <PrintButton />
            <ScrollToTop
                className='scroller'
                smooth
                viewBox="-5 0 18 18"
                svgPath="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                style={{ bottom: "30px", opacity: 0.75, backgroundColor: 'grey' }}
            />
        </div>)
}
export default SemResult;
