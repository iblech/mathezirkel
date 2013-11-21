\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{zirkelbrief}[2013/03/29 LaTeX class]

\LoadClass[a4paper,ngerman,13pt]{scrartcl}

\RequirePackage[utf8]{inputenc}

\RequirePackage[ngerman]{babel}

\RequirePackage{amsmath,amsthm,amssymb,stmaryrd,color,graphicx}

\RequirePackage[protrusion=true,expansion=true]{microtype}

\RequirePackage{lmodern}

\RequirePackage{geometry}
\geometry{tmargin=1cm,bmargin=1.5cm,lmargin=1.5cm,rmargin=2.5cm}

\RequirePackage{hyperref}

\RequirePackage{dashrule}
\RequirePackage{setspace}

\newcommand{\freist}[1]{\hdashrule{#1}{1px}{1pt}}
\newcommand{\freistLang}{\freist{11cm}}
\newcommand{\freistMittel}{\freist{6cm}}
\newcommand{\freistLaenger}{\freist{8cm}}
\newcommand{\freistKurz}{\freist{2cm}}
\newcommand{\checkbox}{\ensuremath{\ \Box\ }}
\newcommand{\phantomcheckbox}{\ensuremath{\phantom{\ \Box\ }}}

\setlength\parskip{\medskipamount}
\setlength\parindent{0pt}

\clubpenalty=10000
\widowpenalty=10000
\displaywidowpenalty=10000

\pagestyle{empty}

\setlength{\unitlength}{1cm}

\newcommand{\anschrift}{%
      Matheschülerzirkel \\
      Universität Augsburg \\
      Lehrstuhl für Algebra und Zahlentheorie \\
      Universitätsstraße 14 \\
      86159 Augsburg}
\newcommand{\betreff}{}
\newcommand{\datum}{}

\newcommand{\makeletterhead}{%
  \includegraphics[scale=0.1]{logo-ifm}\par
  \begin{picture}(0,0)
    \put(0,0){%
      {\tiny Universität Augsburg -- Lst. Algebra und Zahlentheorie -- 86135
      Augsburg}
    }
    \put(0,-3.5){\vbox{\small\anschrift}}
    \put(14.7,-3.5){\includegraphics[scale=0.18]{illustrationen/cover}}
  \end{picture}\par
  \vspace{4cm}
  \textbf{\betreff}\par
  \vspace{2em}}
