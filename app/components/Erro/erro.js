export default function Error({ textError }) {
    if (!textError) return null;

    return (
        <div className="flex items-center justify-center bg-red-100 text-red-600 border-2 border-red-600 p-3 rounded-md text-sm font-medium my-2">
            {textError}
        </div>
    );
}