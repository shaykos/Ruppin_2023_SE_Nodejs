import { useEffect, useRef, useState } from "react"


export default function UploadWidget() {
  const CloudinaryRef = useRef();
  const WidgetRef = useRef();
  const [imgSrc, SetImgSrc] = useState();

  function CreateCloudiaryRef() {
    CloudinaryRef.current = window.cloudinary;
    WidgetRef.current = CloudinaryRef.current.createUploadWidget({
      cloudName: 'shaykos',
      uploadPreset: 'ruppin'
    }, (err, res) => {
      if (err) return;
      console.log('res =>', res);
      if(res.info?.url)
        SetImgSrc(res.info.url)
        console.log('res.info.url',res.info.url);
    })
  }

  useEffect(() => {
    CreateCloudiaryRef();
  }, [])

  return (
    <>
      <button onClick={()=>WidgetRef.current.open()}>Upload</button>
    </>
  )

}