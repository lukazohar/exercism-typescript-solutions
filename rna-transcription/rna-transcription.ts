class Transcriptor {
    strandsTranscriptor: { [id: string]: string } = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    toRna(strandsString: string): string {
        return [...strandsString]
            .map(strand => {
                if(this.strandsTranscriptor[strand] == undefined)
                    throw Error("Invalid input DNA.")
                else return this.strandsTranscriptor[strand]
            })
            .join("");
    }
}

export default Transcriptor;