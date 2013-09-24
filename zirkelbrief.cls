\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{zirkelbrief}[2013/03/29 LaTeX class]

\LoadClass[a4paper,ngerman,12pt]{scrartcl}

\RequirePackage[utf8]{inputenc}

\RequirePackage[ngerman]{babel}

\RequirePackage{amsmath,amsthm,amssymb,stmaryrd,color,graphicx}

\RequirePackage[protrusion=true,expansion=true]{microtype}

\RequirePackage{lmodern}

\RequirePackage{geometry}
\geometry{tmargin=2cm,bmargin=2cm,lmargin=2.5cm,rmargin=2.5cm}

\RequirePackage{hyperref}

\setlength\parskip{\medskipamount}
\setlength\parindent{0pt}

\clubpenalty=10000
\widowpenalty=10000
\displaywidowpenalty=10000

\pagestyle{empty}

\setlength{\unitlength}{1cm}

\newcommand{\anschrift}{}
\newcommand{\betreff}{}
\newcommand{\datum}{}
\newcommand{\absender}{%
    \textbf{Prof. Dr. Marco Hien} \\
    \ \\
    Lehrstuhl für Algebra und Zahlentheorie \\
    Universitätsstr. 14 \\
    86159 Augsburg \\
    \ \\
    Telefon \> +49 (0) 821 598 -- 2152 \\
    Telefax \> +49 (0) 821 598 -- 2090 \\
    \textsf{marco.hien@math.uni-augsburg.de} \\
    \textsf{http:/\!/www.math.uni-augsburg.de/alg} \\
}

\newcommand{\makeletterhead}{%
  \includegraphics[scale=0.1]{logo-ifm}\par
  \begin{picture}(0,0)
    \put(0,0){%
      {\tiny Universität Augsburg -- Lst. Algebra und Zahlentheorie -- 86159
      Augsburg}
    }
    \put(0,-2.5){\vbox{\anschrift}}
    \put(10,-4.5){\vbox{
      \small
      \begin{tabbing}
        Telefax \= \kill
        \absender
        \rule{174pt}{0.25mm} \\
        Augsburg, den \datum
      \end{tabbing}
    }}
  \end{picture}\par
  \vspace{4cm}
  \textbf{\betreff}\par
  \vspace{1em}}
