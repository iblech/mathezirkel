\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{zirkelbrief}[2013/03/29 LaTeX class]

\LoadClass[a4paper,ngerman,13pt]{scrartcl}

\RequirePackage[utf8]{inputenc}

\RequirePackage[ngerman]{babel}

\RequirePackage{amsmath,amsthm,amssymb,stmaryrd,color,graphicx}

\RequirePackage[protrusion=true,expansion=true]{microtype}

\RequirePackage{lmodern}

\RequirePackage{geometry}
\geometry{tmargin=2cm,bmargin=1.5cm,lmargin=1.5cm,rmargin=2.5cm}

\RequirePackage{hyperref}

\RequirePackage{dashrule}
\RequirePackage{setspace}

\newcommand{\freist}{\hdashrule{11cm}{1px}{1pt}}
\newcommand{\freistMittel}{\hdashrule{6cm}{1px}{1pt}}
\newcommand{\freistLaenger}{\hdashrule{8cm}{1px}{1pt}}
\newcommand{\freistKurz}{\hdashrule{2cm}{1px}{1pt}}
\newcommand{\checkbox}{$\ \Box\ $}

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
  \end{picture}\par
  \vspace{4cm}
  \textbf{\betreff}\par
  \vspace{2em}}
