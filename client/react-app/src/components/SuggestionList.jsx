import react, {useState} from 'react'
import Suggestion from './Suggestion'


export default function SuggestionList( { formattedSuggestions } ) {

    // this is dummy data for how the AI generated suggestions look like 
    const dummySuggestionData = {
        'social': {
            'suggestionDescription' : 'hang out with friends'
        },

        'academic': {
            'suggestionDescription' : 'study for ics 6b'
        },
        
        'personal': {
            'suggestionDescription' : 'do yoga and meditate'
        }

    }

    return (
        <>  
            <Suggestion habitType='Social' suggestionDescription={formattedSuggestions['social']['suggestionDescription']} />
            <Suggestion habitType='Academic' suggestionDescription={formattedSuggestions['academic']['suggestionDescription']} />
            <Suggestion habitType='Personal' suggestionDescription={formattedSuggestions['personal']['suggestionDescription']} />
        </>
    );
}
