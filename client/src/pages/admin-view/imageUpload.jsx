import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useRef } from 'react'

function ProductImageUpload({imageFile, setImageFile, uploadImageUrl, setUploadImageUrl}) {

    const inputRef = useRef(null)
    const handleImageFileChange = ()=>{

    }
    const handleDragOver = () => {
        
    }
    const handleOnDrop = (e) => { 
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if(file) setImageFile(file)
        uploadImageUrl(URL.createObjectURL(file))
    }
    const handleRemoveImage = () => {
        setImageFile(null)
        if(inputRef.current){
            inputRef.current.value=''
        }
    }
  return (
    <div  className='w-full max-w-md mx-auto mt-4'>
        <label className='text-lg font-semibold mb-2 block'>Upload Image</label>
        <div onDragOver={handleDragOver} onDrop={handleOnDrop} className='border-2 border-dashed rounded-lg p-4'>
            <input type="file" className='hidden' id='image-upload' ref={inputRef} onChange={handleImageFileChange} /> 
        </div>
        { 
        !imageFile ?
        <label htmlFor='image-upload' className='flex flex-col items-center justify-center h-32 cursor-pointer'>
            <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2'/>
           <span>Drag and drop or click to upload image</span>
        </label>:
        
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <FileIcon className='w-8 text-primary mr-2 h-8'/>
            </div>
            <p className='text-sm font-medium'>{imageFile.name}</p>
            <button variant='ghost' size='icon' className='text-muted-foreground hover:text-foreground' onClick={handleRemoveImage}>
                <XIcon className='w-4 h-4'/>
            </button>
        </div>
    } 
    </div>
  )
}

export default ProductImageUpload