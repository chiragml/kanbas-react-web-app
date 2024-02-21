import BooleanVariables from './Variables/BooleanVariables';
import VariableTypes from './Variables/VariableTypes';
import VariablesAndConstants from './Variables/VariablesAndConstants';
import IfElse from './conditionals/IfElse';
import Ternary from './conditionals/TrenaryOperator';
import ArrayIndexAndLength from './arrays/ArrayIndexAndLength';
import FunctionParenthesisAndParameters from './functions/FunctionParenthesisAndParameters';
import ImpliedReturn from './functions/ImpliedReturn';
import WorkingWithArrays from './arrays/WorkingWithArrays';
import WorkingFunctions from './functions/WorkingWithFunctions';
import JsonStringify from './json/JSONStingify';
import TemplateLiterals from './string/TemplateLiterals';
import House from './json/House';
import Spreading from './json/Spreading';
import Destructing from './json/Destructing';
import FunctionDestructing from './functions/FunctionDestructing';

function JavaScript() {
  console.log('Hello World!');
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <Ternary />
      <WorkingFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
      <WorkingWithArrays />
      <JsonStringify />
      <TemplateLiterals />
      <House />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}
export default JavaScript;
