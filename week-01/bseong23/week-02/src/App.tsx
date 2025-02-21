import {
  Accordion,
  AccordionItem,
  AccordionSummary,
  AccordionDetails,
} from "./components"

function App() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">기본 아코디언</h2>
      <Accordion>
        <AccordionItem id="1">
          <AccordionSummary>첫 번째 섹션</AccordionSummary>
          <AccordionDetails>
            첫 번째 섹션의 내용입니다. 여기를 클릭하면 아코디언이 열립니다.
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem id="2">
          <AccordionSummary>두 번째 섹션</AccordionSummary>
          <AccordionDetails>
            두 번째 섹션의 내용입니다. 이 섹션도 독립적으로 열리고 닫힙니다.
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem id="3">
          <AccordionSummary>세 번째 섹션</AccordionSummary>
          <AccordionDetails>
            세 번째 섹션의 내용입니다. 모든 섹션은 애니메이션과 함께 열리고
            닫힙니다.
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App
