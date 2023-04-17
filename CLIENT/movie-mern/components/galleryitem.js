export function GalleryItem ({ movie }) {
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <div>
            <img src={movie.poster_path} alt="" />
        </div>
};