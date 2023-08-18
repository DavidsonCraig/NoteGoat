import { useEffect, useState } from "react";

const GrandStaff = (props) => {
    const [staffSharp1, setStaffSharp1] = useState(1)
    const [staffSharp2, setStaffSharp2] = useState(1)
    const [staffSharp3, setStaffSharp3] = useState(1)
    const [staffSharp4, setStaffSharp4] = useState(1)
    const [staffSharp5, setStaffSharp5] = useState(1)
    const [staffSharp6, setStaffSharp6] = useState(1)
    const [staffSharp7, setStaffSharp7] = useState(1)

    const [staffFlat1, setStaffFlat1] = useState(0)
    const [staffFlat2, setStaffFlat2] = useState(0)
    const [staffFlat3, setStaffFlat3] = useState(0)
    const [staffFlat4, setStaffFlat4] = useState(0)
    const [staffFlat5, setStaffFlat5] = useState(0)
    const [staffFlat6, setStaffFlat6] = useState(0)
    const [staffFlat7, setStaffFlat7] = useState(0)

    const keySignature = props.keySignature

    //Helper
    const resetFlats = (() => {
        setStaffFlat1(0)
        setStaffFlat2(0)
        setStaffFlat3(0)
        setStaffFlat4(0)
        setStaffFlat5(0)
        setStaffFlat6(0)
        setStaffFlat7(0)
    })

    const resetSharps = (() => {
        setStaffSharp1(0)
        setStaffSharp2(0)
        setStaffSharp3(0)
        setStaffSharp4(0)
        setStaffSharp5(0)
        setStaffSharp6(0)
        setStaffSharp7(0)
    })

    //Chromatic
    const cMaj = (() => {
        resetFlats()
        resetSharps()
    })

    //Sharp keys
    const gMaj = (() => {
        resetFlats()
        setStaffSharp1(1)
        setStaffSharp2(0)
        setStaffSharp3(0)
        setStaffSharp4(0)
        setStaffSharp5(0)
        setStaffSharp6(0)
        setStaffSharp7(0)
    })

    const dMaj = (() => {
        resetFlats()
        setStaffSharp1(1)
        setStaffSharp2(1)
        setStaffSharp3(0)
        setStaffSharp4(0)
        setStaffSharp5(0)
        setStaffSharp6(0)
        setStaffSharp7(0)
    })

    const aMaj = (() => {
        resetFlats()
        setStaffSharp1(1)
        setStaffSharp2(1)
        setStaffSharp3(1)
        setStaffSharp4(0)
        setStaffSharp5(0)
        setStaffSharp6(0)
        setStaffSharp7(0)
    })

    const eMaj = (() => {
        resetFlats()
        setStaffSharp1(1)
        setStaffSharp2(1)
        setStaffSharp3(1)
        setStaffSharp4(1)
        setStaffSharp5(0)
        setStaffSharp6(0)
        setStaffSharp7(0)
    })

    const bMaj = (() => {
        resetFlats()
        setStaffSharp1(1)
        setStaffSharp2(1)
        setStaffSharp3(1)
        setStaffSharp4(1)
        setStaffSharp5(1)
        setStaffSharp6(0)
        setStaffSharp7(0)
    })

    const FSharpMaj = (() => {
        resetFlats()
        setStaffSharp1(1)
        setStaffSharp2(1)
        setStaffSharp3(1)
        setStaffSharp4(1)
        setStaffSharp5(1)
        setStaffSharp6(1)
        setStaffSharp7(0)
    })

    const cSharpMaj = (() => {
        resetFlats()
        setStaffSharp1(1)
        setStaffSharp2(1)
        setStaffSharp3(1)
        setStaffSharp4(1)
        setStaffSharp5(1)
        setStaffSharp6(1)
        setStaffSharp7(1)
    })

    //Flat Keys
    const fMaj = (() => {
        resetSharps()
        setStaffFlat1(1)
        setStaffFlat2(0)
        setStaffFlat3(0)
        setStaffFlat4(0)
        setStaffFlat5(0)
        setStaffFlat6(0)
        setStaffFlat7(0)
    })

    const bFlatMaj = (() => {
        resetSharps()
        setStaffFlat1(1)
        setStaffFlat2(1)
        setStaffFlat3(0)
        setStaffFlat4(0)
        setStaffFlat5(0)
        setStaffFlat6(0)
        setStaffFlat7(0)
    })

    const eFlatMaj = (() => {
        resetSharps()
        setStaffFlat1(1)
        setStaffFlat2(1)
        setStaffFlat3(1)
        setStaffFlat4(0)
        setStaffFlat5(0)
        setStaffFlat6(0)
        setStaffFlat7(0)
    })

    const aFlatMaj = (() => {
        resetSharps()
        setStaffFlat1(1)
        setStaffFlat2(1)
        setStaffFlat3(1)
        setStaffFlat4(1)
        setStaffFlat5(0)
        setStaffFlat6(0)
        setStaffFlat7(0)
    })

    const dFlatMaj = (() => {
        resetSharps()
        setStaffFlat1(1)
        setStaffFlat2(1)
        setStaffFlat3(1)
        setStaffFlat4(1)
        setStaffFlat5(1)
        setStaffFlat6(0)
        setStaffFlat7(0)
    })

    const gFlatMaj = (() => {
        resetSharps()
        setStaffFlat1(1)
        setStaffFlat2(1)
        setStaffFlat3(1)
        setStaffFlat4(1)
        setStaffFlat5(1)
        setStaffFlat6(1)
        setStaffFlat7(0)
    })

    const cFlatMaj = (() => {
        resetSharps()
        setStaffFlat1(1)
        setStaffFlat2(1)
        setStaffFlat3(1)
        setStaffFlat4(1)
        setStaffFlat5(1)
        setStaffFlat6(1)
        setStaffFlat7(1)
    })

    useEffect(() => {
        switch(keySignature) {
            //chromatic
            case "CMaj":
                cMaj()
                break
            //sharps
            case "GMaj":
                gMaj()
                break
            case "DMaj":
                dMaj()
                break
            case "AMaj":
                aMaj()
                break
            case "EMaj":
                eMaj()
                break
            case "BMaj":
                bMaj()
                break
            case "FSharpMaj":
                FSharpMaj()
                break
            case "CSharpMaj":
                cSharpMaj()
                break
            //Flats
            case "FMaj":
                fMaj()
                break
            case "BFlatMaj":
                bFlatMaj()
                break
            case "EFlatMaj":
                eFlatMaj()
                break
            case "AFlatMaj":
                aFlatMaj()
                break
            case "DFlatMaj":
                dFlatMaj()
                break
            case "GFlatMaj":
                gFlatMaj()
                break
            case "GFlatMaj":
                cFlatMaj()
                break
            case "CFlatMaj":
                cFlatMaj()
                break
            default:
                cMaj()
                break
        }
    }, [keySignature])

    return ( 
        <div className="GrandStaff">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="1100"
                height="476"
                stroke="#00274aff"
                fill="#00274aff"
                viewBox="0 0 1272 540"
            >
            <g id="grandStaffTemplate"stroke="#00274a">
                <path id="brace" d="m44.25 489.78c-54.855-46.249-18.847-69.237-3.1226-136.86 15.725-67.625-34.147-84.152-34.147-84.152 51.244-34.671 21.061-129.27 12.935-149.04-8.1255-19.775-5.7305-57.459 25.345-72.866-36.155 6.8316-53.997 53.297-25.345 121.97 28.652 68.675-20.41 100.33-19.914 100.02 58.235 46.7 10.744 116.44 3.6207 152.11-7.1238 35.667 36.621 71.897 40.627 68.821z"/>
                <path d="m152.76 196.2-32.39-156.16c-0.24552-4.2222 15.79-26.835 22.845-26.835 12.518 23.158-25.818 60.946-25.818 60.946-35.05 34.424-30.622 66.639-24.666 76.984 17.218 29.772 58.724 13.905 66.444 7.9801 10.681-9.3781 22.426-39.442-6.6968-54.227-29.123-14.785-41.153 11.042-41.96 17.218-2.1906 22.845 13.245 26.481 13.245 26.481-8.1017-10.606-9.6848-19.395-3.4817-31.292 2.4754-4.7475 10.519-10.697 21.085-9.6426 11.061 1.1043 18.864 10.826 20.234 15.631 12.619 38.006-29.486 41.284-29.486 41.284-65.243 3.904-15.183-78.674-11.855-83.025 51.9-43.068 27.853-78.556 28.432-76.239-16.918-12.371-35.411 30.271-35.363 34.893 21.445 134.89 33.632 149.66 35.096 157.14 1.4633 7.4823-0.55664 16.749-3.5799 19.932-3.0232 3.1836-16.956 7.2739-16.807 6.7788 19.403-22.532-6.8848-21.593-6.8848-21.593-20.927 1.98-6.2918 22.798 4.7724 24.723 35.473-3.2326 26.796-30.535 26.835-30.982z" strokeWidth=".66991px"/><path d="m52.51 44.82v444.96" strokeWidth="1.3844"/>
                <g transform="matrix(.6678 0 0 .6678 13.54 257.61)" fillRule="evenodd">
                <path d="m141.28 170.37c-14.382 2.0838-22.838 10.779-26.914 22.841-2.5812 7.8574-1.3661 16.187-0.68263 17.476 1.4891 2.8084 4.0253 6.6898 6.8178 8.5876s5.7317 3.3037 9.0644 3.3047c7.6221 8.5e-4 13.964-5.5189 13.964-12.931-5.3e-4 -7.4113-6.1794-13.419-13.801-13.418-2.572 5e-3 -3.4009-0.21241-5.5832 1.1112-8.6822-0.57685 6.9927-16.793 16.198-17.202 31.258-1.3902 35.38 35.449 33.328 48.254-7.2179 45.024-34.301 77.334-64.615 88.955 48.28-3.451 98.002-68.422 88.525-110.3-5.7931-25.599-35.081-40.561-56.3-36.677z"/><circle cx="228.61" cy="232.52" r="9.9963"/>
                <circle cx="228.61" cy="187.48" r="9.9963"/>
                </g>
                <g strokeWidth="1.5">
                <path d="m51.82 365.12h1220.2"/>
                <path d="m51.82 396.15h1220.2"/>
                <path d="m52.084 427.18h1220.2"/>
                <path d="m51.817 458.1h1220.2"/>
                <path d="m51.82 489.12h1220.2"/>
                <path d="m51.82 45.57h1220.2"/>
                <path d="m51.85 76.601h1220.2"/>
                <path d="m51.893 107.63h1220.2"/>
                <path d="m51.818 138.66h1220.2"/>
                <path d="m52.445 169.69h1220.2"/>
                </g>
            </g>
            <g id="staffSharps"stroke="#00274a">
                <path opacity={staffSharp1} d="m227.06 17.35-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp2} d="m256.07  65.36-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp3} d="m284.79 3.3047-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp4} d="m313.99 48.381-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp5} d="m343 96.398-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp6} d="m371.72 34.336-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp7} d="m400.92 79.405-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp1} d="m227.06 367.93-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp2} d="m256.07 415.83-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp3} d="m285.05 353.89-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp4} d="m313.99 398.96-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp5} d="m343 446.85-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp6} d="m371.72 384.92-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
                <path opacity={staffSharp7} d="m400.92 429.88-1.9245 0.71787v15.007l-14.77 5.461v-14.514l-1.9245 0.71913v14.506l-14.42 5.3324v1.7148l14.42-5.3323v15.066l-14.42 5.3324v1.7136l14.42-5.3324v14.549l1.9245-0.71912v-14.541l14.77-5.4623v14.487l1.9245-0.71913v-14.479l14.974-5.5369v-1.7136l-14.974 5.5369v-15.064l14.416-5.3311v-1.7149l-14.416 5.3311zm-1.9245 17.439v15.064l-14.77 5.4623v-15.066z"/>
            </g>
            <g id="staffFlats"> 
                <path opacity={staffFlat1} d="m206.26 47.376v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.06941 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat2} d="m234.98 0.43725v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.06941 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat3} d="m263.96 62.493v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat4} d="m292.94 16.876v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.06941 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat5} d="m321.91 78.413v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat6} d="m350.89 31.477v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat7} d="m379.68 93.443v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat1} d="m205.96 397.85v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat2} d="m235.01 351.01v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat3} d="m263.96 412.98v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat4} d="m292.94 366.93v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat5} d="m321.91 428.87v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat6} d="m350.89 382.06v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
                <path opacity={staffFlat7} d="m379.87 444.14v76.82c27.418-12.015 28.36-39.123 3.0235-28.562v-48.257zm10.632 49.244c13.997 0.0694 2.9913 17.492-7.6039 24.33v-23.217c3.0943-0.77975 5.6042-1.1237 7.6039-1.1138z"/>
            </g>
            </svg>
        </div>
     );
}
 
export default GrandStaff;