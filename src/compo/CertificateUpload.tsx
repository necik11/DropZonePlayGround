
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import { FilePondFile } from "filepond";

import { useState } from "react";

import React, { useCallback } from 'react'
// import { useDropzone } from 'react-dropzone'
// import Dropzone from "react-dropzone-uploader";

export const CertificateUpload: React.FunctionComponent = () => {

    console.log("reender ");
    // const [files, setFiles] = useState([]);
    const [files, setFiles] = useState<any[]>([]);
    registerPlugin(
        FilePondPluginFileValidateType
    );

    function handleClick(): void {
        console.log("handleClick");
        console.log("files", files);
        // files.forEach(f => console.log("file:", (f as FilePondFile)));
    }

    function onupdatefiles(incomeFiles: FilePondFile[]): void {
        console.log("onupdatefiles - incomeFiles", incomeFiles);
        const someError = incomeFiles.some(i => i.status !== 2); // Filepond.Filestatus of 2 == idle
        console.log("onupdatefiles - someError", someError);
        if (!someError) {
            setFiles(incomeFiles);
        }
    }

    return (
        <div>

            <FilePond
                // allowDrop
                files={files}
                // onupdatefiles={setFiles as (files: FilePondFile[]) =>void}
                // onupdatefiles={onupdatefiles}
                onupdatefiles={onupdatefiles}
                allowReorder={true}
                allowMultiple={false}
                allowFileTypeValidation={true}
                acceptedFileTypes={["application/x-pkcs12", ".pfx"]}
                // acceptedFileTypes={['image/png', 'image/jpeg']}
                labelFileTypeNotAllowed="Neplatný typ souboru"
                fileValidateTypeLabelExpectedTypes="Očekávaný typ je .pfx"
                labelIdle='<span class="filepond--label-action">Zde vložte certifikát</span>'
                // onaddfile={(error, file) => {
                //     if (!error) {
                //         console.log("not error save");
                //         // setFiles as (files: FilePondFile[]) => void;
                //         setFiles([...files, file]);
                //     }
                //     console.log("on add File");
                //     console.log("error", error);
                //     console.log("file", file);
                // }}

            // checkValidity
            // beforeAddFile={(fie) => { console.log("fie", fie); return true; }}

            />
            <button onClick={handleClick}>Show files object</button>
            {/* 
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
            /> */}

        </div>

    )


}