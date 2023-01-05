
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// const csvFileReader = new CsvFileReader('football.csv');

const matchreader = MatchReader.fromCsv('football.csv');
matchreader.load();


const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchreader.matches);
