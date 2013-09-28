#!/usr/bin/perl

use warnings;
use strict;

use File::Slurp qw< slurp >;

my $tmpl = slurp("briefvorlage.tex");

while(<>) {
  chomp;
  my (
    $schule, $strasse, $plz, $ort,
    $schulekurz,
    $weitweg,
    $lehrername,
    $schuelername,
  ) = split /,/, $_;

  my %assoc = (
    schule => $schule,
    strasse => $strasse,
    plz => $plz,
    ort => $ort,
    lehrername => $lehrername,
    lehrermaennlich => ($lehrername =~ /Herr/ ? "true" : "false"),
    schuelername => join(" ", (split / /, $schuelername)[1,2]),
    schuelerkurz => (split / /, $schuelername)[1],
    schuelermaennlich => ($schuelername =~ /Herr/ ? "true" : "false"),
    schulekurz => $schulekurz,
    weitweg => $weitweg,
  );

  $tmpl =~ s/\(\($_\)\)/$assoc{$_}/g for keys %assoc;

  my $id = $schule;
  $id =~ s/[^a-zA-Z]//g;

  open my $fh, ">", "out/$id.tex" or die $1;
  print $fh $tmpl;
}
